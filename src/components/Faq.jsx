import { BsChatRightDotsFill } from "react-icons/bs";

const Faq = () => {
    return (
        <div className="my-10 container mx-auto">
            <h1 className="text-center text-4xl font-extrabold">Frequently Ask <span className="text-[#e26d2f]">Questions</span></h1>
            <p className="text-center py-3">There are many variations of passages of Lorem electronics repair, <br /> but the majority have suffered alteration in azer duskam</p>
          

            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="w-full h-full">
                    <div className="join join-vertical w-full">
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-xl font-medium flex items-center gap-2">
                                <span className="text-[#e26d2f]"><BsChatRightDotsFill /></span> What can i do when my laptop crashes?
                            </div>
                            <div className="collapse-content">
                                <p className="border-l-4 border-dashed p-4"> Overheating can cause crashes. Ensure that your laptops vents are clear of dust and debris, and consider using a laptop cooling pad to improve airflow.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium flex items-center gap-2">
                                <span className="text-[#e26d2f]"><BsChatRightDotsFill /></span>  How can i Clean my keyboard?
                            </div>
                            <div className="collapse-content">
                                <p className="border-l-4 border-dashed p-4">Turn the keyboard upside down and gently shake it to dislodge any loose crumbs, dust, or debris. You can also use compressed air to blow out debris from between the keys.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium flex items-center gap-2">
                                <span className="text-[#e26d2f]"><BsChatRightDotsFill /></span>   How do i get into safe mode to repair?
                            </div>
                            <div className="collapse-content">
                                <p className="border-l-4 border-dashed p-4">Once you are in Safe Mode, you can attempt repairs or troubleshooting. Remember, in Safe Mode, your computer will only load essential system files, which can help isolate issues.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <img src="https://i.ibb.co/2kfjL68/7f9a07d0-db17-48ba-800b-ea94896c800a.jpg" alt="" className="w-[500px] h-[300px] rounded-lg" />
                </div>

            </div>
            
        </div>
    );
};

export default Faq;