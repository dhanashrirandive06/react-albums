// ************** Imports **************
import "./style.css";
import CardContainer from "./components/CardContainer";
import Button from "./components/Button";
import { useState, useEffect } from "react";

function App() {
  // List of Albums
  const [albumList, setAlbumList] = useState([]);

  // When Component Initially render It will fetch album list from given api url
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/albums"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setAlbumList(result);
      } catch (error) {
        console.error("Error adding album:", error);
      }
    };

    fetchData();
  }, []);

  // This function add new album to the album list
  const handleAddAlbum = async (userId, title) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            userId: userId,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      const newAlbum = {
        id: albumList.length + 1,
        userId: userId,
        title: title,
      };
      setAlbumList([...albumList, newAlbum]);
    } catch (error) {
      console.error("Error adding album:", error);
    }
  };

  // This function update album from the album list
  const handleUpdateAlbum = async (id, userId, title) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          title: title,
          userId: userId,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));

      const data = albumList.map((ele) => {
        if (ele.id === id) {
          return {
            ...ele,
            userId: userId,
            title: title,
          };
        }
        return ele;
      });

      setAlbumList(data);
    } catch (error) {
      console.error("Error adding album:", error);
    }
  };

  // This function delete album from the album list
  const handleDeleteAlbum = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
        method: "DELETE",
      });

      const data = albumList.filter((ele) => ele.id !== id);

      setAlbumList(data);
      alert("Album deleted Succesfully");
    } catch (error) {
      console.error("Error adding album:", error);
    }
  };

  return (
    <>
      <nav className="navbar navbar-light w-100">
        <div className="container-fluid p-3">
          <div className="navbar-brand text-lg text-white">React Album</div>

          <Button
            text={"Add Album"}
            className={"btn btn-light"}
            isAdd={true}
            isUpdate={false}
            handleAddAlbum={handleAddAlbum}
            handleUpdateAlbum={handleUpdateAlbum}
          />
        </div>
      </nav>

      <div className="container mt-5 ">
        <CardContainer
          albumList={albumList}
          handleDeleteAlbum={handleDeleteAlbum}
          handleUpdateAlbum={handleUpdateAlbum}
        />
      </div>
    </>
  );
}

// ************** Exports **************
export default App;
