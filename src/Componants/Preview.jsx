import React from 'react'
import Prism from "prismjs";
import { marked } from "marked";
import { BsArrowsFullscreen, BsFullscreenExit } from 'react-icons/bs';

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};
export const Preview = ({ markdown, handlemaximizepreview, maximizepreview }) => {
  return (
    <div className='mt-3 md:m-7' >
      <div className=" min-h-screen 	 flex flex-col shadow-slate-600 shadow-2xl ">
        <div className='bg-neutral-400 flex flex-row justify-between items-center'>
          <h1 className='text-2xl 	p-3 border-2 border-slate-400 border-solid border-b-0	'>Previewer</h1>
          <button onClick={handlemaximizepreview}
            className='mr-3 text-2xl  ease-in-out duration-300  hover:text-slate-700 hover:text-3xl'>
            {maximizepreview ? <BsFullscreenExit /> : <BsArrowsFullscreen />}
          </button>
        </div>
        <div className=' border-2 border-slate-400 border-solid overflow-scroll  max-h-screen'
          dangerouslySetInnerHTML={{
            __html: marked(markdown, { renderer: renderer })
          }}
          id="preview"
        />
      </div>
    </div>


  )
}