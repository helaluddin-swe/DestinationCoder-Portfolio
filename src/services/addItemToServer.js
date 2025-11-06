export const addNewProjectToServer = async (
 formData
) => {
  const response = await fetch("http://localhost:3000/api/project", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: formData
  });
  const item = await response.json();
  return mapFromServerToLocal(item);
};
// fetch item from server
export const getProjectItemFromServer=async( )=>{
    const response=await fetch("http://localhost:3000/api/project", {
    method: "GET",
  
  } )
  const item=await response.json()
  return item.map(mapFromServerToLocal)
}
const mapFromServerToLocal = (serverItem) => {
  return {
    id: serverItem._id,
    projectName: serverItem.title,
    projectTags: serverItem.tags,
    projectDescription: serverItem.description,
    projectImage: serverItem.image,
    githubLink: serverItem.github,
    liveLink: serverItem.link,
  };
};
