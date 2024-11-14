import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://oruhogruiqwwbdlhxbvc.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ydWhvZ3J1aXF3d2JkbGh4YnZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE2MTg2NjUsImV4cCI6MjA0NzE5NDY2NX0.7hQBWzaRd-d3-MBgZSV2lzzXm34Bvw6jN43HZjSAvnA",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ydWhvZ3J1aXF3d2JkbGh4YnZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE2MTg2NjUsImV4cCI6MjA0NzE5NDY2NX0.7hQBWzaRd-d3-MBgZSV2lzzXm34Bvw6jN43HZjSAvnA"
    }
});
