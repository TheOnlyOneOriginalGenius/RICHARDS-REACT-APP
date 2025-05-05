export default function Project({ title, image, deployedLink, repoLink }) {
    return (
      <div className="border rounded-lg shadow p-4">
        <img src={image} alt={title} className="rounded"/>
        <h3 className="text-xl mt-2">{title}</h3>
        <div className="mt-2">
          <a href={deployedLink} className="text-blue-500">View App</a> | 
          <a href={repoLink} className="text-blue-500 ml-2">GitHub</a>
        </div>
      </div>
    );
  }
  
