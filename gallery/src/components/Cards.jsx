
const Cards = (props) => {
  return (
    <>
      <a href={props.elem.url} target='_blank'>
          <img className="images" src={props.elem.download_url} alt="" />
      </a>
    </>
  )
}

export default Cards