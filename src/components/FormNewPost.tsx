import { Editor } from 'novel';

const FormNewPost = () => {
  return (
    <form>
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-3" htmlFor="title">Title</label>
        <input
          id="title"
          className="block w-full text-slate-900 border-slate-400 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          type="text"
          name="title"
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-3" htmlFor="slug">Slug</label>
        <input
          id="slug"
          className="block w-full text-slate-900 border-slate-400 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          type="text"
          name="slug"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold mb-3">Content</label>
        <Editor
          disableLocalStorage={true}
          defaultValue={{
            "type": "doc",
            "content": []
          }}
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold mb-3" htmlFor="excerpt">Excerpt</label>
        <input
          id="excerpt"
          className="block w-full text-slate-900 border-slate-400 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          type="text"
          name="excerpt"
        />
      </div>
      
      <button className="inline-block rounded py-2.5 px-6 text-sm font-bold uppercase text-white bg-slate-600 hover:bg-slate-500 dark:bg-slate-500 dark:hover:bg-slate-400">
        Submit
      </button>
    </form>
  )
}

export default FormNewPost;