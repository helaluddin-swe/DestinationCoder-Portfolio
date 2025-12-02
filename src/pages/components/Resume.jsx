import { Link } from "react-router-dom";

import { Briefcase } from "lucide-react";

import React from "react"
import { ResumeData } from "../../services/resumeData";

const CreateResume = () => {
  const printRef = React.useRef(null);

 

  return (<> 
  <div className="p-4"> 
    <div ref={printRef} style={{
      backgroundColor: "#ffffff", 
      color: "#000000",          
      borderColor: "#d1d5db",     
    }} className="w-full bg-white border border-gray-300 shadow-md p-6 font-serif">
      {ResumeData.map((item) => (
        <div key={item.section} className="mb-8">
          
          {/* BASIC INFO */}
          {item.section === "basicInfo" && (
            <div className="flex flex-col items-center gap-2 mb-6">
              <h2 className="text-2xl font-bold tracking-wide">{item.data.fullName}</h2>
              <p className="text-sm text-gray-700">{item.data.designation} | {item.data.subject}</p>
              <div className="flex justify-center gap-6 mt-2 text-sm text-gray-600">
                {[
                  { icon: item.data.icon[0], label: item.data.email, url: item.data.emailUrl },
                  { icon: item.data.icon[2], label: item.data.linkedin, url: item.data.linkedinUrl },
                  { icon: item.data.icon[3], label: item.data.nationality },
                  { icon: item.data.icon[4], label: item.data.Github, url: item.data.GithhubUrl },
                ].map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <div key={idx} className="flex items-center gap-1">
                      {info.url ? (
                        <a href={info.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                          <Icon size={20} /> <span>{info.label}</span>
                        </a>
                      ) : (
                        <span className="flex items-center gap-1"><Icon size={20} /> {info.label}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* WORK EXPERIENCE */}
          {item.section === "work" && (
            <div className="mb-6">
              <h2 className="uppercase font-bold text-lg">{item.label}</h2>
              <div className="border-t-2 border-black w-full my-2" />
              {item.experiences.map((exp, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-md font-semibold">{exp.company}</h3>
                  <div className="flex justify-between text-sm text-gray-600">
                    <p>{exp.designation}</p>
                    <p>{exp.duration}</p>
                  </div>
                  <ul className="list-disc ml-6 mt-2">
                    {exp.learn.map((point, i) => <li key={i}>{point}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* EDUCATION */}
          {item.section === "education" && (
            <div className="mb-6">
              <h2 className="uppercase font-bold text-lg">{item.label}</h2>
              <div className="border-t-2 border-black w-full my-2" />
              {item.list.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-semibold">{edu.institute}</h3>
                  <div className="flex justify-between text-sm">
                    <div className="flex gap-6">
                      <p>{edu.degree}</p>
                      <p>CGPA: {edu.cgpa}/{edu.outof}</p>
                    </div>
                    <p>{edu.year}</p>
                  </div>
                  <h3 className="mt-2 font-semibold">Research Topics: <span className="font-normal">{edu.Research}</span></h3>
                </div>
              ))}
            </div>
          )}

          {/* PROJECT */}
          {item.section === "project" && (
            <div className="mb-6">
              <h2 className="uppercase font-bold text-lg">{item.label}</h2>
              <div className="border-t-2 border-black w-full my-2" />
              {item.list.slice(0, 3).map((project, idx) => (
                <div key={idx} className="mb-4">
                  <h3 className="font-semibold">{project.name}</h3>
                  <ul className="list-disc ml-6 mt-2">
                    {project.learn.map((point, i) => <li key={i}>{point}</li>)}
                  </ul>
                </div>
              ))}
              {item.others && (
                <>
                  <h2 className="text-xl font-bold mb-2">More Projects:</h2>
                  <div className="grid grid-cols-3 gap-2">
                    {item.others.map((other, idx) => (
                      <li key={idx} className="flex items-center gap-2 list-none">
                        <Briefcase size={20} /> {other}
                      </li>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {/* SKILLS */}
          {item.section === "skills" && (
            <div className="mb-6">
              <h2 className="uppercase font-bold text-lg">{item.label}</h2>
              <div className="border-t-2 border-black w-full my-2" />
              {item.skillList.map((skill, idx) => (
                <div key={idx} className="flex gap-4 px-2 mb-2">
                  <h3 className="font-bold">{skill.label}:</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.set.map((s, i) => (
                      <span key={i} className="px-2 py-1 shadow-sm bg-gray-100 rounded">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ACHIEVEMENTS */}
          {item.section === "achievement" && (
            <div className="mb-6">
              <h2 className="uppercase font-bold text-lg">{item.label}</h2>
              <div className="border-t-2 border-black w-full my-2" />
              <div className="grid grid-cols-2 gap-4 px-2">
                {item.list.map((award, idx) => <li key={idx} className="list-none">{award}</li>)}
              </div>
            </div>
          )}

        </div>
      ))}
    </div>
   
      </div>
    </>
  );
};

export default CreateResume;
