// ************** Imports **************
import Card from "./Card";

function CardContainer({ albumList, handleDeleteAlbum, handleUpdateAlbum }) {
  return (
    <>
      <div className="row m-auto">
        {/* Iterate albumlist and call card Component to render each album */}
        {albumList.map((obj, index) => {
          return (
            <div className="col-8 col-md-6 col-lg-4 my-3" key={index}>
              <Card
                obj={obj}
                index={index}
                handleDeleteAlbum={handleDeleteAlbum}
                handleUpdateAlbum={handleUpdateAlbum}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

// ************** Exports **************
export default CardContainer;
