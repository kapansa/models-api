const express = require("express");

const app = express();

app.get("/api", (req, res) => {

      const { slack_name, track } = req.query;
      const current_day = new Date().getDay();
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

      const currentUTCTime = new Date().getTime();
      const twoMinuteWindow = 2 * 60 * 1000; // 2 minutes in milliseconds
      const randomTimeOffset = Math.floor(Math.random() * (twoMinuteWindow * 2)) - twoMinuteWindow;
      const adjustedUTCTime = currentUTCTime + randomTimeOffset;
      const adjustedDate = new Date(adjustedUTCTime);

      const info = {
            slack_name: slack_name,
            current_day: daysOfWeek[current_day],
            utc_time: adjustedDate,
            track: track,
            github_file_url: "https://github.com/kapansa/api-endpoint/blob/main/app.js",
            github_repo_url: "https://github.com/kapansa/api-endpoint",
            status_code: 200
      }

      res.json(info);
});

const PORT = 5000;
app.listen(PORT, () => {
      console.log(`server is now running on PORT ${PORT}`);
});
