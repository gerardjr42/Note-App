import { Link } from "react-router-dom";

export default function Note({ note, categories, category}) {
  const updatedCat = categories.slice(1)
  // console.log(note.category)
  // console.log(updatedCat)

  const check = updatedCat.find((cat) => {
    return cat.name.toLowerCase() === note.category.toLowerCase()
  })
  
  const bg = check && check.color ? `bg-[${check.color}]` : "bg-red-100";


  return (
    <div className="mb-3 ml-auto mr-auto w-3/4 rounded border-b px-1 py-6 text-start">
      <div className="flex items-center">
        <h2 className="ml-2 font-extrabold text-fuchsia-200">
          <Link to={`/notes/${note.id}`} className="text-lg">
          {note.title}
          </Link>
          </h2>
        <span className="ml-auto text-xs font-normal text-accent">
          {category.toUpperCase()}
        </span>
        <span
        className={`ml-2 inline-block h-3 w-3 rounded-full ${bg}`}
        ></span>
      </div>
      <br />
      <h3 className="text-font ml-2 text-xl">{note.body}</h3>
    </div>
  );
}
