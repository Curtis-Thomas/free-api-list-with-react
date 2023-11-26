import React, { useEffect, useState } from "react";
import { Octokit } from "@octokit/core";
import { Box, Typography, Link, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";

const ContributorsContent = () => {
  const [contributors, setContributors] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortCriteria, setSortCriteria] = useState("contributions");

  useEffect(() => {
    const fetchData = async () => {
      const octokit = new Octokit({
        //recommended to use env variables
        auth: `GitHub access token`, //add the access token here for auth, https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
      });

      try {
        const res = await octokit.request("GET /repos/Curtis-Thomas/free-api-list-with-react/contributors", {
          owner: "Curtis-Thomas",
          repo: "free-api-list-with-react",
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
        });

        const contributorsWithData = await Promise.all(
          res.data.map(async (contributor) => {
            const userRes = await octokit.request(`GET /users/${contributor.login}`);
            const eventsRes = await octokit.request(`GET /users/${contributor.login}/events`);

            // Find the latest push event
            const pushEvent = eventsRes.data.find((event) => event.type === "PushEvent");

            return {
              ...contributor,
              name: userRes.data.name || contributor.login,
              lastContributionDate: pushEvent ? new Date(pushEvent.created_at) : null,
            };
          })
        );

        setContributors(contributorsWithData);
      } catch (error) {
        console.error("Error fetching contributors:", error.message);
      }
    };

    fetchData();
  }, []);

  const handleSort = (criteria) => {
    // Toggle sort order if clicking on the same criteria
    if (criteria === sortCriteria) {
      setSortOrder((order) => (order === "asc" ? "desc" : "asc"));
    } else {
      // Reset order to ascending when changing criteria
      setSortCriteria(criteria);
      setSortOrder("asc");
    }
  };

  const sortedContributors = [...contributors].sort((a, b) => {
    if (sortCriteria === "contributions") {
      return sortOrder === "asc"
        ? a.contributions - b.contributions
        : b.contributions - a.contributions;
    } else if (sortCriteria === "lastContributionDate") {
      return sortOrder === "asc"
        ? (a.lastContributionDate || 0) - (b.lastContributionDate || 0)
        : (b.lastContributionDate || 0) - (a.lastContributionDate || 0);
    }
    return 0;
  });

  return (
    <Box sx={{ border: "solid 1px #333333", padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Contributors List
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ color: "black" }} onClick={() => handleSort("name")}>Name</TableCell>
            <TableCell style={{ color: "black" }} onClick={() => handleSort("contributions")}>
              Contributions
              {sortCriteria === "contributions" && (
                <span>{sortOrder === "asc" ? " ↑" : " ↓"}</span>
              )}
            </TableCell>
            <TableCell style={{ color: "black" }} onClick={() => handleSort("lastContributionDate")}>
              Last Contribution Date
              {sortCriteria === "lastContributionDate" && (
                <span>{sortOrder === "asc" ? " ↑" : " ↓"}</span>
              )}
            </TableCell>
            <TableCell style={{ color: "black" }}>GitHub Profile</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedContributors.map((contributor) => (
            <TableRow key={contributor.id}>
              <TableCell style={{ color: "black" }}>{contributor.name}</TableCell>
              <TableCell style={{ color: "black" }}>{contributor.contributions}</TableCell>
              <TableCell style={{ color: "black" }}>
                {contributor.lastContributionDate
                  ? contributor.lastContributionDate.toDateString()
                  : "No contributions"}
              </TableCell>
              <TableCell>
                <Link href={contributor.html_url} target="_blank" rel="noopener noreferrer">
                  GitHub
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default ContributorsContent;
