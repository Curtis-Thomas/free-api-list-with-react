import React, { useEffect, useState } from "react";
import { Octokit } from "@octokit/core";
import {
  Box,
  Typography,
  Link,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  useMediaQuery,
  Card,
  CardContent,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from "@mui/material";


const ContributorsContent = () => {
  const [contributors, setContributors] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortCriteria, setSortCriteria] = useState("contributions");

  const isSmallScreen = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const fetchData = async () => {
      const octokit = new Octokit({
        auth: process.env.REACT_APP_GITHUB_TOKEN,
      });

      try {
        const res = await octokit.request(
          "GET /repos/Curtis-Thomas/free-api-list-with-react/contributors",
          {
            owner: "Curtis-Thomas",
            repo: "free-api-list-with-react",
            headers: {
              "X-GitHub-Api-Version": "2022-11-28",
            },
          }
        );

        const contributorsWithData = await Promise.all(
          res.data.map(async (contributor) => {
            const userRes = await octokit.request(
              `GET /users/${contributor.login}`
            );
            const eventsRes = await octokit.request(
              `GET /users/${contributor.login}/events`
            );

            // Find the latest push event
            const pushEvent = eventsRes.data.find(
              (event) => event.type === "PushEvent"
            );

            return {
              ...contributor,
              name: userRes.data.name || contributor.login,
              lastContributionDate: pushEvent
                ? new Date(pushEvent.created_at)
                : null,
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
    } else if (sortCriteria === "name") {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      return sortOrder === "asc"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    }
    return 0;
  });

  // Card component for screen-width<=600px
  const contributorCard = (contributor) => (
    <Card key={contributor.id} sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6" style={{ color: "black" }}>
          {contributor.name}
        </Typography>
        <Typography style={{ color: "black" }}>
          Contributions: {contributor.contributions}
        </Typography>
        <Typography style={{ color: "black" }}>
          Last Contribution Date:{" "}
          {contributor.lastContributionDate
            ? contributor.lastContributionDate.toDateString()
            : "No contributions"}
        </Typography>
        <Link
          href={contributor.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
      </CardContent>
    </Card>
  );

  // sortBy dropdown for screen-width<=600px
  const SortBy = ({ handleSort, sortCriteria, sortOrder }) => {
    const sortOptions = [
      { value: "name", label: "Name" },
      { value: "contributions", label: "Contributions" },
      { value: "lastContributionDate", label: "Last Contribution Date" },
    ];

    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <FormControl>
          <InputLabel id="demo-simple-select-label">sort by</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortCriteria}
            label="sort by"
            onChange={(e) => handleSort(e.target.value)}
            style={{ color: "black", cursor: "pointer" }}
          >
            {sortOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography
          style={{ color: "black", cursor: "pointer", fontSize: "2rem" }}
          onClick={() => handleSort(sortCriteria)}
        >
          {sortOrder === "asc" ? " ↑" : " ↓"}
        </Typography>
      </Box>
    );
  };

  return (
    <Box sx={{ border: "solid 1px #333333", padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Contributors List
      </Typography>
      {isSmallScreen && (
        <SortBy
          handleSort={handleSort}
          sortCriteria={sortCriteria}
          sortOrder={sortOrder}
        >
          sortBy
        </SortBy>
      )}
      {isSmallScreen ? (
        // Card Layout for small screens
        <Box>{sortedContributors.map(contributorCard)}</Box>
      ) :(
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }}>
          <TableHead>
            <TableRow>
              <TableCell
                style={{ color: "black" }}
                onClick={() => handleSort("name")}
              >
                Name
                {sortCriteria === "name" && (
                  <span>{sortOrder === "asc" ? " ↑" : " ↓"}</span>
                )}
              </TableCell>
              <TableCell
                style={{ color: "black" }}
                onClick={() => handleSort("contributions")}
              >
                Contributions
                {sortCriteria === "contributions" && (
                  <span>{sortOrder === "asc" ? " ↑" : " ↓"}</span>
                )}
              </TableCell>
              <TableCell
                style={{ color: "black" }}
                onClick={() => handleSort("lastContributionDate")}
              >
                Last Contribution Date
                {sortCriteria === "lastContributionDate" && (
                  <span>{sortOrder === "asc" ? " ↑" : " ↓"}</span>
                )}
              </TableCell>
              <TableCell
                style={{ color: "black" }}
              >
                GitHub Profile
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedContributors.map((contributor) => (
              <TableRow key={contributor.id}>
                <TableCell
                  style={{ color: "black" }}
                >
                  {contributor.name}
                </TableCell>
                <TableCell
                  style={{ color: "black" }}
                >
                  {contributor.contributions}
                </TableCell>
                <TableCell
                  style={{ color: "black" }}
                >
                  {contributor.lastContributionDate
                    ? contributor.lastContributionDate.toDateString()
                    : "No contributions"}
                </TableCell>
                <TableCell>
                  <Link
                    href={contributor.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      )}
    </Box>
  );
};

export default ContributorsContent;
