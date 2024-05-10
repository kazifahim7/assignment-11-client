

const ReviewCard = ({image,profession}) => {
    return (
        <div>
            <div className="flex justify-center items-center">
                <img src={image} alt=""  />
            </div>
            <p className="text-center">The service was impeccable, with friendly and attentive staff catering to our every need. <br /> Now, lets talk about the food - absolutely divine!</p>
            <div className="flex flex-col justify-center items-center">
                <p className="border-l-2 h-8 border-[#e26d2f]"> </p>
                <p>Rose</p>
                <p>{profession}</p>
            </div>
            
        </div>
    );
};

export default ReviewCard;