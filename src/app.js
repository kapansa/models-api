const express = require("express");

const app = express();
const rounter = express.Router();
app.use("/api", rounter);

rounter.get("/", (req, res) => {
      const { slack_name, track } = req.query;
      const current_day = new Date().getDay();
      const daysOfWeek = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
      ];

      const currentUTCTime = new Date().getTime();
      const adjustedDate = new Date(currentUTCTime);

      const info = {
            slack_name: slack_name,
            current_day: daysOfWeek[current_day],
            utc_time: adjustedDate.toISOString().slice(0, -5) + 'Z',
            track: track,
            github_file_url: "https://github.com/kapansa/api-endpoint/blob/main/app.js",
            github_repo_url: "https://github.com/kapansa/api-endpoint",
            status_code: 200,
      };

      res.json(info);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
      console.log(`server is now running on PORT ${PORT}`);
});
