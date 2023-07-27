import React from "react";

export default class Footer extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <div className="bg-slate-800 flex justify-center	items-center	 h-10">
          <p className="text-white text-sm font-light tracking-wide	 text-center">
            Design & Develop By Rishi
          </p>
        </div>
      </>
    );
  }
}
