
import { getNoteById } from "../services/notesApi"


export default function NoteDetails() {


  async function test() {
    const note = await getNoteById("ab7hhJWyFXFN3Bg0lv9X")
    console.log(note,'the note')
}
test()

 return ( <section className="over fixed right-0 h-screen w-[85%] overflow-y-auto scroll-smooth bg-primary">
      <h1 className="text-font text-center">Note Details</h1>
  </section>)
}