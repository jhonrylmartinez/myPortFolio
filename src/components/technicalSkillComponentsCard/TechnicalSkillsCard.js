const TechnicalSkillsCard = ({image, title}) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
        <img
          src={image} 
          alt="technical skill image"
          className="w-30 h-20 mx-auto mb-4 transition-transform transform hover:scale-110 "
        />
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
    )
}

export default TechnicalSkillsCard