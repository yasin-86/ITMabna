
function Card({imageUrl, title, price}) {
  return (
    <>
      <div className='w-[400px] border rounded-lg p-3 shadow-md hover:shadow-xl hover:scale-[1.02] hover:transition-all duration-300 ease-in-out bg-blue-900'>
      <div className="overflow-hidden rounded-md">
        <img
          src={imageUrl}
          alt={title}
          className='w-full h-48 object-cover rounded-md transform transition duration-300 ease-in-out hover:scale-105'
        />
      </div>

      <div className="mt-3">
        <h3 className='font-bold text-xl text-gray-900 dark:text-white'>{title}</h3>
        
        <p className="text-sm text-gray-900 dark:text-gray-300 mt-1">توضیحات کوتاه...</p>
         <div className="flex justify-between items-center mt-2">
          <span className="text-green-600 font-semibold dark:text-green-400">{price} تومان</span>
          <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-sm">
            افزودن به سبد
          </button>
        </div>
      </div>
    </div>

    </>
  )
}

export default Card;
