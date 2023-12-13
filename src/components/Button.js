// ************** Imports **************
import { useState, useRef } from "react";

function Button({
  text: text,
  className: className,
  isUpdate: isUpdate,
  isAdd: isAdd,
  handleAddAlbum,
  handleUpdateAlbum,
  obj: obj,
}) {
  // to open and close modal
  const [modalOpen, setModalOpen] = useState(false);

  // values to update album
  const [userId, setUserId] = useState(isUpdate ? obj.userId : null);
  const [title, setTitle] = useState(isUpdate ? obj.title : null);
  //values to create new album
  const userIdRef = useRef(null);
  const titleRef = useRef(null);

  // Change modal value
  const handleModalOpen = () => {
    if (modalOpen === false) {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  };

  // Call handleAddAlbum to create new Album
  const onHandleAddAlbum = () => {
    handleAddAlbum(userIdRef.current.value, titleRef.current.value);
    setModalOpen(false);
    alert("New ALbum Added Successfully");
  };

  // Call handleUpdateAlbum to update Album
  const onHandleUpdateAlbum = () => {
    handleUpdateAlbum(obj.id, userId, title);
    setModalOpen(false);
    alert("ALbum Update Successfully");
  };

  // update userId value on onchange
  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  // update title value on onchange
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <>
      {/* Button trigger modal */}
      <button onClick={handleModalOpen} type="button" className={className}>
        {isAdd ? (
          <i class="fas fa-xl fa-plus-circle"></i>
        ) : (
          <i class="fas  fa-edit"></i>
        )}
        <span className="mx-1"> {text}</span>
      </button>

      {/* add Album */}
      {modalOpen && isAdd && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add Album
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleModalOpen}
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3 row">
                <label htmlFor="userid" className="col-sm-2 col-form-label">
                  User Id
                </label>
                <div className="col-sm-10">
                  <input
                    ref={userIdRef}
                    type="number"
                    className="form-control"
                    id="userid"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="userid" className="col-sm-2 col-form-label">
                  Title
                </label>
                <div className="col-sm-10">
                  <input
                    ref={titleRef}
                    type="text"
                    className="form-control"
                    id="title"
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleModalOpen}
              >
                Close
              </button>
              <button
                onClick={onHandleAddAlbum}
                type="button"
                className="btn btn-primary"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Update Album */}
      {modalOpen && isUpdate && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Update Album
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleModalOpen}
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3 row">
                <label htmlFor="userid" className="col-sm-2 col-form-label">
                  User Id
                </label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    id="userid"
                    value={userId}
                    onChange={handleUserIdChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="userid" className="col-sm-2 col-form-label">
                  Title
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    onChange={handleTitleChange}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleModalOpen}
              >
                Close
              </button>
              <button
                onClick={onHandleUpdateAlbum}
                type="button"
                className="btn btn-primary"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ************** Exports **************
export default Button;
