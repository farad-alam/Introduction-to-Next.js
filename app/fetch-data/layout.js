import React from 'react'

function layout({children, defaultFetch, dynamicFetch}) {
  return (
    <>
      {children}
      <div className="w-10/12 mx-auto h-screen">
        <div className="grid grid-cols-2 gap-6 justify-center items-center h-11/12">
          {defaultFetch}
          {/* {dynamicFetch} */}
        </div>
      </div>
    </>
  );
}

export default layout