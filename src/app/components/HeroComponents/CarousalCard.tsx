import React from 'react'

type Props = {}

function CarousalCard({}: Props) {
  return (
    <div className="block rounded-lg dark:bg-neutral-700 m-1">
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <img
          className="rounded h-56 w-34 object-cover"
          src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
          alt=""
        />
        <div className="my-3">SEDANs</div>
      </div>
    </div>
  );
}

export default CarousalCard