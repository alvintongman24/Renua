

function Video() {
    return(
        <>
      <div className="w-screen h-auto max-h-screen">
  <video className="w-full h-[700px] md:h-auto  max-h-full object-cover" controls loop>
    <source src="cloth.mp4" type="video/mp4" />
  </video>
</div>


        </>
    )
}

export default Video;
