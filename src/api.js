import axios from "axios";

const lessonsAPI = axios.create({
  baseURL: "http://localhost:8080/api",
});

export const getLessons = () => {
  return lessonsAPI.get("/lessons").then((res) => {
    return res.data.lessons;
  });
};
