function XLBlock({ img, title, category }) {
  return (
    <div className='xl_block container'>
      <img src={img}></img>
      <div className='show'>
        <span>{title}</span>
        <span>{category}</span>
      </div>
    </div>
  );
}

export default XLBlock;
