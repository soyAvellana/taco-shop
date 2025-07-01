import burritoImg from '../../../assets/img/Burritos.png';

function Burritos() {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
<img
  className="w-36 h-36 object-cover rounded-t-lg"
  src={burritoImg}
  alt="Burrito Bild"
/>
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Burritos</h5>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          Frisch zubereitete Burritos mit leckeren Zutaten, perfekt für den großen Hunger.
        </p>
      </div>
    </div>
  );
}

export default Burritos;
