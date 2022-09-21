
const NFTItem = ({item}) => {
  return (
    <div className="grid grid-cols-3">
        <div className="col-span-1">
            <img src={item.image_url} alt={item.name} />
        </div>
        <div className="col-span-2">
            <h1>{item.name}</h1>
        </div>
    </div>
  )
}

export default NFTItem