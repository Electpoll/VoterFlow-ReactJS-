

export default function Report() {
  return (
    <section className="py-10">
        <div className="text-center">
        <h1 className="font-bold text-3xl mt-5"> Report A Problem </h1>
        <p className="text-xl mt-2">Having any issue with the site? You can report the problem to us. We&apos;ll be sure to get back to you.</p>
        </div>
        <div className="flex justify-center">
            <div className="my-10">
            <div className="flex">
                <input type="text" placeholder="Your Name" className="text-start outline-none pl-4 pr-8 w-full py-2 border-2 border-gray-500 rounded-lg" size="50" maxLength="50" />
                <input type="email" placeholder="Your Email" className="text-start outline-none pl-4 pr-8 ml-4 w-full py-2 border-2 border-gray-500 rounded-lg" size="50" maxLength="50" />
                </div>
                <textarea rows="5" cols="50" placeholder="Message" className="text-start block outline-none p-5 w-full my-2 border-2 border-gray-500 rounded-lg"></textarea>
                <input type="submit" value="Send Message" className="bg-amber-500 text-black font-bold border-2 border-transparent w-full py-2 rounded-lg hover:bg-amber-600" />
        </div>
        </div>
    </section>
  )
}