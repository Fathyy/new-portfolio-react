const WorkItem = ({ image, heading, description }) => {
  return (
    <div>
      <div className="bg-lighterBlack p-10 space-y-4">
        <div>
          <img src={image} alt="" />
        </div>
        <h4 className="text-2xl text-white font-bold text-center sm:text-left">
          {heading}
        </h4>
        <p className="text-xl text-lighterText text-center sm:text-left">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WorkItem;
