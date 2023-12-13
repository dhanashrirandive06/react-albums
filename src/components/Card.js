// ************** Imports **************
import Button from "./Button";

function Card({ obj, index, handleDeleteAlbum, handleUpdateAlbum }) {
  return (
    <>
      {/* Album Card */}
      <div className=" shadow-sm rounded border-none p-3 box">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Album {index + 1}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              UserId : {obj.userId}
            </h6>
            <p className="card-text">{obj.title}</p>
          </div>
        </div>

        {/* Update and Delete button for each album */}
        <div className="d-flex justify-content-around buttonStyle">
          <Button
            text={"Update"}
            className={"btn btn-primary"}
            isAdd={false}
            isUpdate={true}
            handleUpdateAlbum={handleUpdateAlbum}
            obj={obj}
          />
          <button
            onClick={() => handleDeleteAlbum(index + 1)}
            className="btn btn-danger"
          >
            <i class="fas fa-trash "></i>
            <span className="mx-1"> Delete</span>
          </button>
        </div>
      </div>
    </>
  );
}

// ************** Exports **************
export default Card;
