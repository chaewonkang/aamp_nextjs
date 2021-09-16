function SmallBlock({ img, title, category }) {
  return (
    <div className='special_block container'>
      <img src={img}></img>
      <div className='show'>
        <span>{title}</span>
        <span>{category}</span>
      </div>
    </div>
  );
}

export default SmallBlock;
