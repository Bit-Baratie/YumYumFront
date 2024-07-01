import axios from "axios"

export const search = async (keyword: string|null) => {
  console.log(keyword);
  const result = await axios.get(`${process.env.SERVER_IP}/store?keyword=${keyword}`)
  .then((res) => {
    return res.data;
  }).catch((err) => {
    console.log(err.message);
  });

  return result;
}

export const top10Search = async (local: string) => {
  const result = await axios.get(`${process.env.SERVER_IP}/top10?local=${local}`)
  .then((res) => {
    return res.data;
  }).catch((err) => {
    console.log(err.message);
  });

  return result;
}

export const monthSearch = async (local: string) => {
  const result = await axios.get(`${process.env.SERVER_IP}/month?local=${local}`)
  .then((res) => {
    return res.data;
  }).catch((err) => {
    console.log(err.message);
  });

  return result;
}

export const starSearch = async (local: string) => {
  const result = await axios.get(`${process.env.SERVER_IP}/star?local=${local}`)
  .then((res) => {
    return res.data;
  }).catch((err) => {
    console.log(err.message);
  });

  return result;
}

export const viewsSearch = async (local: string) => {
  const result = await axios.get(`${process.env.SERVER_IP}/views?local=${local}`)
  .then((res) => {
    return res.data;
  }).catch((err) => {
    console.log(err.message);
  });

  return result;
}