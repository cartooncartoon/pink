import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="max-h-screen">
      <Head>
        <title>Pink Herb</title>
        <link rel="icon" href="/PHArtboard 61.png" />
        <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </Head>
      <header 
      style={{background: '#4f6866'}}
      className="w-full h-24 sticky top-0 z-10 items-center flex justify-between p-6 flex-row">
        {Icon()}
        <div className="flex-row flex space-x-8">
          <p className="text-2xl font-bold font-muli text-white"><i class="fas fa-shopping-cart mr-2"></i>  ·  1</p>
        </div>
      </header>
      <div className="mt-2 sm:mt-0">
        <div className="flex-col sm:flex-row flex sm:space-x-12">
      <div 
      style={{height: 'calc(100vh - 96px)'}}
      className="w-full sm:w-1/2 max-h-xl h-full 
      sticky top-0
      bg-gray-100 animate__animated 
      shadow-lg animate-fade-in-down overflow-hidden">
        <img
        className="xl:object-left-bottom object-center" 
        style={{width: '100%', height: '100%', objectFit: 'cover'}}
        width="100%" height="100%" src="/mock1.png" />
      </div>
      <div 
      style={{height: 600}}
      className="w-full sm:w-1/2 max-h-xl h-full animate-fade-in-up animate__animated p-6">
        <h1 
        className="text-3xl mt-6 sm:text-5xl font-muli font-extrabold tracking-tighter">
        Ayurvedic Growth Oil
        </h1>
        <p 
        style={{lineHeight: 1.9}}
        className="xl:text-xl lg:text-lg text-md font-muli mt-6 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed facilisis massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut pharetra tempus velit, quis dignissim justo. Vivamus sollicitudin tempus mi, eget volutpat tellus sodales imperdiet. Etiam vitae cursus tortor. Praesent at nibh eget erat fringilla rhoncus. Maecenas euismod lacus sed porttitor accumsan. Phasellus a posuere arcu. Duis at purus erat. Fusce accumsan, nulla sit amet commodo accumsan, lacus orci consectetur felis, eget luctus est felis ut velit. In finibus, eros quis dictum feugiat, tortor diam fringilla sapien, ut tincidunt enim neque quis tellus. Cras posuere nisi eget orci tempus ornare.</p>
        <div className="justify-end w-full flex">
        <button 
        className="mt-8 font-muli
        font-semibold
        hover:shadow-lg
        text-md
        mr-6
        hover:bg-primary-600
        text-white
        bg-primary
        transition duration-300 ease-in-out hover:scale-105
        p-6"><i class="fas fa-cart-plus mr-2"></i>ADD TO CART</button>
        <button 
        className="mt-8 font-muli
        hover:bg-primary-600
        font-semibold
        hover:shadow-lg
        text-white
        bg-primary
        text-md
        transition duration-300 ease-in-out hover:scale-105
        p-6"><i class="fas fa-users mr-2"></i>SHARE</button>
        
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="52"
      fill="none"
      viewBox="0 0 116 123"
    >
      <path
        fill="white"
        fillRule="evenodd"
        d="M34.945.456c-1.316.053-2.393.133-2.393.179 0 .046.649 1.34 1.441 2.875 2.63 5.094 3.225 7.304 3.213 11.935-.013 4.824-.728 7.42-2.045 7.42-2.002 0-2.414-3.253-1.721-13.587.245-3.638-.768-7.119-2.41-8.289-.974-.694-3.89-.325-11.975 1.512-3.405.774-7.96 1.61-10.191 1.872-1.492.175-4.514-.448-6.259-1.289-.669-.323-1.257-.587-1.307-.587-.05 0 .126.635.39 1.411.942 2.761 1.906 6.228 2.646 9.509.122.54.226 1.73.232 2.644.013 2.062.136 2.126 3.569 1.876 4.421-.323 6.784.293 11.237 2.929 5.815 3.443-3.316 4.306-10.992 1.04-.27-.115-.987-.411-1.595-.658a16.863 16.863 0 01-2.047-1.029c-1.238-.76-1.426-.645-1.969 1.207-.252.859-.549 1.783-.661 2.053-.208.506-.488 1.691-1.099 4.662C.095 32.579-.019 39.426.763 42.853c1 4.383.985 4.067.48 10.256-.146 1.789.165 4.316.869 7.057.122.472.401 1.632.622 2.576.688 2.949 2.107 7.715 2.74 9.203 1.774 4.167 3.1 5.042 8.551 5.642 6.33.697 11.768.058 18.773-2.207 8.301-2.683 11.73-2.769 11.977-.299.173 1.732-4.363 5.23-8.91 6.871-5.554 2.005-17.659 1.359-25-1.335-1.216-.447-1.216-.447-.753 1.414 2.216 8.909 7.857 17.859 12.714 20.173 1.591.757 2.478 1.028 6.11 1.864 2.896.667 7.594.221 10.458-.992 4.927-2.087 14.351-7.584 17.89-10.436 3.432-2.766 6.419-3.421 5.861-1.285-.181.692-1.981 2.641-3.722 4.029-.675.538-1.282 1.043-1.349 1.122-.388.455-4.2 3.097-6.396 4.433-2.568 1.561-3.537 2.077-5.138 2.732l-1.554.636c-1.685.688-9.487 1.48-16.422 1.667l-5.092.137v.62c0 2.311 14.703 12.8 20.123 14.357 4.304 1.236 13.394 2.009 20.368 1.732 4.154-.165 5.192-.478 8.836-2.667 13.16-7.905 15.423-12.363 12.386-24.405-.905-3.586-.798-3.926 1.232-3.926 1.145 0 2.02.233 3.681.979.612.274 2.795 1.236 4.417 1.947.675.295 1.448.639 1.718.764 1.158.537 2.88.746 3.775.458 3.498-1.128 9.203-8.478 12.268-15.804 1.066-2.55 1.14-2.742 1.562-4.049l.638-1.977c1.22-3.782 1.646-12.48.793-16.202-.137-.597-.421-1.913-.631-2.926-.366-1.767-.969-3.997-1.358-5.03a115.41 115.41 0 01-.619-1.718c-.409-1.156-1.613-3.975-2.044-4.785-2.688-5.058-5.052-8.3-7.787-10.676a146.15 146.15 0 01-2.548-2.262l-.859-.794-.152 5.7c-.21 7.867-.756 11.177-2.458 14.903-.278.607-.675 1.49-.884 1.963-3.743 8.482-7.991 14.233-10.514 14.233-1.6 0-1.211-1.927 1.613-7.975.567-1.215 1.177-2.54 1.354-2.945l.973-2.209c.357-.81.743-1.693.86-1.963.282-.656 1.597-4.658 1.935-5.89 5.101-18.587 5.054-20.67-.598-26.609-1.486-1.562-5.459-4.617-7.274-5.594a17.77 17.77 0 01-1.581-.987c-.425-.303-.924-.552-1.11-.552-.185 0-.555-.147-.821-.326-.429-.288-3.886-1.747-6.619-2.793-.54-.206-1.202-.461-1.472-.565-1.011-.392-2.777-.967-5.276-1.717a193.514 193.514 0 01-3.19-.98 68.49 68.49 0 00-2.086-.625 102.38 102.38 0 01-2.524-.756c-.579-.185-1.247-.336-1.485-.336s-.538-.096-.666-.214-.698-.284-1.267-.37l-1.033-.155.963 1.903a85.93 85.93 0 013.426 7.793c.103.27.367.909.588 1.419.222.511.403 1.124.403 1.362 0 .239.104.539.231.667s.343.675.48 1.215c.136.539.426 1.644.643 2.454 2.222 8.288 1.617 20.49-1.131 22.802-1.529 1.287-4.641-.439-4.641-2.574 0-.207-.095-.481-.213-.609-.655-.717-1.504-6.79-1.504-10.755 0-2.804.203-4.601 1.128-9.969 1.478-8.577.976-11.996-2.185-14.856C49.842.675 46.209.007 34.945.456zm10.2 2.349c2.784 2.824 3.575 5.819 3.624 13.723.035 5.53.381 11.024.909 14.435.548 3.539.488 15.731-.086 17.466-.411 1.243-1.013 1.945-1.292 1.506-.232-.365-1.739-2.225-2.639-3.257-.417-.478-1.936-2.359-3.377-4.181-1.442-1.822-2.869-3.589-3.173-3.926a38.147 38.147 0 01-1.405-1.718 35.13 35.13 0 00-1.101-1.375c-.913-.989-8.184-10.338-8.531-10.968-.328-.593-.431-1.363-.435-3.236-.013-5.961-.992-13.198-2.192-16.2-.107-.27-.32-.8-.472-1.178-.504-1.254-.106-1.495 3.037-1.841 3.416-.376 4.738 2.538 4.043 8.908-.653 5.986-.509 8.924.555 11.353 1.14 2.601 3.709 2.537 5.016-.125l.693-1.412v-5.153c0-5.8-.207-6.788-2.328-11.129-1.491-3.051-1.762-2.868 4.369-2.94l3.512-.042 1.273 1.29zm3.468-.289c.129.124.414.226.635.226.374 0 2.898 1.635 3.53 2.286 2.632 2.712 2.88 6.074 1.126 15.26-.83 4.346-.959 12.534-.249 15.829 1.526 7.086 4.209 9.891 7.528 7.867 3.242-1.977 4.58-13.811 2.526-22.346-.508-2.109-1.037-4.055-1.401-5.153-.59-1.777-1.557-4.499-1.787-5.031-.116-.27-.454-1.043-.751-1.718-2.247-5.117-2.157-4.628-.81-4.426.627.094 1.375.266 1.661.382.286.115 1.348.45 2.361.744 2.803.813 5.71 1.715 6.257 1.941.27.112.988.37 1.595.575 2.626.883 5.54 1.984 5.755 2.174a.975.975 0 00.557.205c1.204 0 4.426 1.998 4.845 3.004.866 2.078.816 1.919 1.837 5.768 1.051 3.96.823 12.221-.47 16.995-.617 2.277-1.316 4.565-1.462 4.785-.09.135-.371.853-.624 1.596-1.825 5.335-6.46 12.463-11.339 17.436-3.071 3.13-5.97 6.487-5.97 6.913 0 .669-1.637-1.084-6.587-7.049-.224-.27-1.345-1.607-2.493-2.972-3.671-4.366-5.153-6.207-5.153-6.401 0-.104.269-.744.598-1.421 1.262-2.597 1.54-13.346.511-19.758-.279-1.736-.478-5.138-.611-10.429-.27-10.745-.912-14.274-3.057-16.81-.783-.926-.745-1.058.254-.874.525.097 1.06.278 1.188.402zm-25.504.66c1.371.987 3.063 9.424 3.063 15.277 0 3.514-.065 3.586-1.405 1.547-3.513-5.348-9.495-10.62-15.098-13.307-.641-.307-1.166-.653-1.166-.767 0-.115.525-.272 1.166-.348 1.353-.162 5.138-.807 6.564-1.119.54-.119 1.865-.399 2.945-.624 1.08-.225 2.239-.499 2.577-.609.798-.26 1.05-.269 1.354-.05zM6.018 6.42c.22.115 1.373.675 2.564 1.245 5.746 2.75 11.57 7.8 15.124 13.114 1.624 2.429 3.811 5.447 4.179 5.767.078.067.907 1.117 1.843 2.331a564.326 564.326 0 004.595 5.832c2.891 3.623 3.191 4.107 2.55 4.107-.351 0-3.427-.579-5.18-.975a762.408 762.408 0 01-8.221-1.957c-.472-.12-1.466-.293-2.208-.386-1.753-.219-3.223-.601-6.381-1.659a119.75 119.75 0 00-4.049-1.281c-.809-.23-1.748-.51-2.086-.623-.337-.113-1-.276-1.472-.363a18.442 18.442 0 01-1.595-.379c-.405-.121-1.371-.391-2.147-.6-1.232-.332-1.411-.456-1.411-.983 0-1.101 1.812-7.972 2.102-7.972.055 0 1.013.376 2.128.835 1.873.771 4.06 1.536 6.813 2.384 2.07.637 6.263.456 7.886-.341 2.965-1.455 1.856-3.48-3.288-6.003-3.915-1.92-4.787-2.121-8.529-1.969-3.129.127-3.186.12-3.187-.395-.001-.896-1.317-6.994-1.94-8.988-.147-.471-.268-.953-.268-1.07 0-.235 1.546-.001 2.178.329zm79.943 9.629c3.745 2.541 7.551 6.732 8.397 9.245.814 2.423.16 6.499-2.783 17.326-.525 1.929-1.113 4.104-1.327 4.908-.262.983-1.859 4.954-2.912 7.239l-1.584 3.435-1.073 2.332c-3.827 8.356 1.203 10.624 6.531 2.945.468-.675.918-1.283.999-1.35.081-.068.512-.785.959-1.595a78.85 78.85 0 011.334-2.332c.767-1.261 2.964-5.803 3.56-7.362.284-.742.614-1.57.735-1.84.22-.494.72-2.531 1.235-5.031.154-.742.333-2.951.4-4.908.154-4.528.292-5.536.642-4.662 1.816 4.54 2.873 19.482 1.944 27.484-.366 3.154-1.021 6.667-1.301 6.982-.114.128-.208.446-.208.707 0 .905-2.201 4.966-3.454 6.372-2.432 2.729-5.064 4.164-11.147 6.077-3.575 1.124-3.451 1.078-6.097 2.291-2.248 1.03-2.053 1.095-4.348-1.447l-2.657-2.945c-.487-.54-1.88-2.14-3.094-3.556a221.507 221.507 0 00-2.774-3.19A81.26 81.26 0 0166 70.891l-1.374-1.667 1.105-1.587c.608-.873 2.643-3.16 4.522-5.081 5.449-5.574 9.687-11.929 12.074-18.108.18-.466.422-1.068.538-1.338.39-.911 1.495-4.409 1.743-5.521.859-3.843 1.016-5.159 1.123-9.448.077-3.049.018-5.13-.168-6.012l-.651-3.068c-.201-.944-.525-2.134-.719-2.643-.752-1.972-.632-1.997 1.768-.369zM3.472 31.937c.54.119 1.589.379 2.332.578l3.313.884c1.079.287 2.184.614 2.454.727 1.872.778 7.036 2.255 9.079 2.595 1.35.225 3.338.633 4.417.907 1.08.274 2.626.643 3.436.822.81.178 2.245.502 3.19.718 1.549.355 3.199.647 6.166 1.091.973.146 1.191.37 5.614 5.796 5.344 6.556 6.288 7.705 6.632 8.073.968 1.036 5.024 6.061 5.024 6.225 0 1.592-11.925 1.077-18.65-.806-3.479-.974-4.094-1.155-4.54-1.333-.27-.108-1.595-.549-2.945-.98-1.35-.43-2.675-.879-2.945-.998-.864-.379-5.103-1.715-5.444-1.715-.181 0-.521-.103-.756-.229-.234-.127-1.309-.412-2.389-.635-1.08-.222-2.515-.528-3.19-.679-1.59-.357-7.846-.357-8.957 0-.473.151-1.275.345-1.783.43l-.925.156.147-3.386c.15-3.446.074-4.211-.878-8.908-.425-2.095-.501-3.151-.406-5.644.157-4.161.126-4.103 2.004-3.689zm100.742 4.118c2.382 2.698 5.047 7.261 6.845 11.718.109.27.379.909.6 1.419.221.511.402 1.124.402 1.362 0 .239.099.539.22.667.763.81 2.234 9.631 2.234 13.396 0 8.732-4.629 20.164-10.886 26.885-3.465 3.722-4.535 3.976-8.623 2.041-6.242-2.955-9.068-3.736-10.441-2.887-.501.31-4.651-3.458-4.651-4.223 0-.361 3.014-1.749 5.644-2.599 1.148-.371 2.307-.762 2.577-.869.27-.107.857-.266 1.305-.354a6.558 6.558 0 001.472-.504c.362-.189.756-.344.875-.345.787-.005 4.315-2.154 6.246-3.805 1.556-1.331 3.887-5.193 4.664-7.73.826-2.7 1.021-3.465 1.021-4.018 0-.337.108-.896.239-1.242.824-2.168.824-18.952-.001-23.574a365.84 365.84 0 00-1.113-5.951c-.179-.852.245-.662 1.371.613zM12.552 54.156c3.756.486 5.193.79 8.098 1.708.54.171 1.644.514 2.454.763.81.248 1.583.526 1.718.617.135.091.632.246 1.104.345.473.099.97.259 1.105.357.135.098 1.405.538 2.822.977 1.417.439 2.797.886 3.067.994.27.107 1.209.381 2.086.609l2.454.638c5.364 1.396 15.367 1.779 17.778.681.921-.42 1.055-.301 5.322 4.745 2.206 2.608 4.362 5.128 4.791 5.6.43.473 1.038 1.188 1.353 1.59.315.401.985 1.174 1.489 1.717 1.155 1.243 1.155 1.745.003 2.752-1.715 1.498-3.381 2.131-8.282 3.145-1.08.224-2.184.493-2.454.598-.27.106-1.098.383-1.84.615-.743.232-1.571.517-1.841.634-2.301.99-3.306 1.447-5.767 2.621a339.711 339.711 0 01-3.803 1.793c-3.616 1.641-4.354 1.958-4.561 1.958-.127 0-.423.104-.657.232-.674.365-3.659 1.209-5.304 1.5-.827.146-2.036.369-2.687.494-3.408.657-9.336.014-13.973-1.516-1.183-.39-2.294-.71-2.468-.71-.287 0-.53-.453-1.518-2.822-.44-1.056-1.03-2.829-1.214-3.649l-.158-.704 1.148.172c.632.094 1.383.264 1.669.377.564.223 3.707.774 7.023 1.232 10.177 1.405 21.53-2.219 24.383-7.784 2.086-4.068-4.519-5.839-11.254-3.016-.27.114-1.153.393-1.963.621a93.14 93.14 0 00-2.454.73c-4.117 1.318-6.093 1.592-11.49 1.592-5.87 0-8.485-.403-9.836-1.517-1.687-1.39-3.38-5.834-5.172-13.575-.218-.945-.498-2.104-.622-2.577-.123-.472-.296-1.472-.384-2.222l-.16-1.364 1.071-.336c.979-.307 4.553-.896 5.734-.944.27-.011 1.705.137 3.19.329zm60.283 26.635c1.261 1.424 2.881 3.246 3.599 4.049l1.305 1.461-.125 1.595c-.127 1.612-.571 4.051-1.227 6.748-1.404 5.772-3.488 8.944-8.495 12.935a186.386 186.386 0 00-2.417 1.953c-3.7 3.122-16.84 11.002-18.347 11.002-.846 0-3.531-.714-4.76-1.266-1.872-.841-3.307-1.549-3.435-1.697-.068-.077-.289-.22-.491-.316-.739-.353-5.127-3.256-5.399-3.573-.068-.078-.509-.41-.982-.739-1.07-.743-5.065-3.946-5.885-4.719l-.609-.574 2.695-.16c12.918-.771 16.298-1.336 20.732-3.47 1.017-.489 5.937-3.453 6.503-3.918a178.08 178.08 0 012.209-1.679c4.521-3.403 6.995-6.104 6.992-7.634-.006-2.722-3.951-2.612-7.483.209-3.716 2.967-8.826 6.115-15.46 9.523-6.31 3.241-12.335 3.349-18.699.336-2.884-1.365-9.511-10.121-7.13-9.42 4.063 1.196 4.841 1.352 8.324 1.673 7.019.646 12.7-.578 21.063-4.537 6.194-2.933 7.06-3.328 8.221-3.751.675-.245 1.337-.52 1.472-.609.135-.09.908-.356 1.718-.591.81-.236 1.748-.528 2.086-.649.337-.121 1.221-.327 1.963-.458 4.764-.836 7.065-1.808 8.746-3.694.841-.944.612-1.081 3.316 1.97zm8.566 9.363c1.359 1.499 1.836 2.204 1.866 2.761.022.411.15 1.189.284 1.729.7 2.804 1.091 4.562 1.31 5.89.277 1.676.136 6.18-.216 6.89-.129.259-.534 1.091-.9 1.849-1.084 2.243-4.043 4.908-9.107 8.202-6.214 4.042-5.741 3.916-14.601 3.901-9.445-.016-10.841-.26-8.28-1.447 3.548-1.643 12.513-7.683 17.416-11.733 5.772-4.766 7.347-7.537 9.027-15.883.259-1.282.534-2.746.612-3.252.203-1.311.535-1.171 2.589 1.093z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

