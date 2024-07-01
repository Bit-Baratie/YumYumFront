import axios from "axios"

export const search = async (keyword: string|null) => {
  console.log(keyword);
  const result = await axios.get(`http://localhost:3000/store?keyword=${keyword}`)
  .then((res) => {
    return res.data;
  }).catch((err) => {
    console.log(err.message);
  });

  return result;
}

export const top10Search = async (local: string) => {
  const result = await axios.get(`http://localhost:3000/top10?local=${local}`)
  .then((res) => {
    return res.data;
  }).catch((err) => {
    console.log(err.message);
  });

  return result;
}

export const monthSearch = async (local: string) => {
  const result = await axios.get(`http://localhost:3000/month?local=${local}`)
  .then((res) => {
    return res.data;
  }).catch((err) => {
    console.log(err.message);
  });

  return result;
}

export const starSearch = async (local: string) => {
  const result = await axios.get(`http://localhost:3000/star?local=${local}`)
  .then((res) => {
    return res.data;
  }).catch((err) => {
    console.log(err.message);
  });

  return result;
}

export const viewsSearch = async (local: string) => {
  const result = await axios.get(`http://localhost:3000/views?local=${local}`)
  .then((res) => {
    return res.data;
  }).catch((err) => {
    console.log(err.message);
  });

  return result;
}