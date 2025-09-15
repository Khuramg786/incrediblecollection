import React, { useEffect, useState } from "react";
import { getdata, deletePost } from "./Api/Apidata"; // import both
import From from "./Form/Form";
const Testing = () => {
  const [data, setData] = useState([]);
  const getthisdata = async () => {
    try {
      const res = await getdata();
      console.log("Fetched Data:", res.data);
      setData(res.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    getthisdata();
  }, []);

  //////////// Delete Data -------------
  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      console.log("Delete response:", res);

      if (res.status === 200) {
        // remove from UI
        const deletedData = data.filter((post) => post.id !== id);
        setData(deletedData);
      }
    } catch (error) {
      console.log("Failed to delete this post", error);
    }
  };
  // ===========update Data ===================
// const handleUpdatepost =()=> setupdateapi(CurEle);

  return (
    <>
<div>
  <From data={data} setData={setData}  />
</div>
    <div style={{ padding: "20px" }}>
      <h1>Posts</h1>

      {data.length === 0 ? (
        <p>Loading or no data...</p>
      ) : (
        <table
          border="1"
          cellPadding="10"
          cellSpacing="0"
          style={{ width: "100%", borderCollapse: "collapse" }}
        >
          <thead style={{ backgroundColor: "#f2f2f2" }}>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Title</th>
              <th>Body</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 5).map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td>
                  <button >Edit</button>
                  <button onClick={() => handleDeletePost(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
        </>
  );
};

export default Testing;
