export const resumes: Resume[] = [
    {
        id: "1",
        companyName: "Google",
        jobTitle: "Frontend Developer",
        imagePath: "/images/resume_01.png",
        resumePath: "/resumes/resume-1.pdf",
        feedback: {
            overallScore: 85,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "2",
        companyName: "Microsoft",
        jobTitle: "Cloud Engineer",
        imagePath: "/images/resume_02.png",
        resumePath: "/resumes/resume-2.pdf",
        feedback: {
            overallScore: 55,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "3",
        companyName: "Apple",
        jobTitle: "iOS Developer",
        imagePath: "/images/resume_03.png",
        resumePath: "/resumes/resume-3.pdf",
        feedback: {
            overallScore: 75,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "4",
        companyName: "Google",
        jobTitle: "Frontend Developer",
        imagePath: "/images/resume_01.png",
        resumePath: "/resumes/resume-1.pdf",
        feedback: {
            overallScore: 85,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "5",
        companyName: "Microsoft",
        jobTitle: "Cloud Engineer",
        imagePath: "/images/resume_02.png",
        resumePath: "/resumes/resume-2.pdf",
        feedback: {
            overallScore: 55,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "6",
        companyName: "Apple",
        jobTitle: "iOS Developer",
        imagePath: "/images/resume_03.png",
        resumePath: "/resumes/resume-3.pdf",
        feedback: {
            overallScore: 75,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
];

export const AIResponseFormat = `
      interface Feedback {
      puntuaciónGeneral: number; //máximo 100
      ATS: {
        puntuación: number; //calificación basada en la compatibilidad con el ATS
        consejos: {
          tipo: "bueno" | "mejorar";
          consejo: string; //dar entre 3 y 4 consejos
        }[];
      };
      tonoYEstilo: {
        puntuación: number; //máximo 100
        consejos: {
          tipo: "bueno" | "mejorar";
          consejo: string; //título breve de la explicación
          explicación: string; //explicación detallada aquí
        }[]; //dar entre 3 y 4 consejos
      };
      contenido: {
        puntuación: number; //máximo 100
        consejos: {
          tipo: "bueno" | "mejorar";
          consejo: string; //título breve de la explicación
          explicación: string; //explicación detallada aquí
        }[]; //dar entre 3 y 4 consejos
      };
      estructura: {
        puntuación: number; //máximo 100
        consejos: {
          tipo: "bueno" | "mejorar";
          consejo: string; //título breve de la explicación
          explicación: string; //explicación detallada aquí
        }[]; //dar entre 3 y 4 consejos
      };
      habilidades: {
        puntuación: number; //máximo 100
        consejos: {
          tipo: "bueno" | "mejorar";
          consejo: string; //título breve de la explicación
          explicación: string; //explicación detallada aquí
        }[]; //dar entre 3 y 4 consejos
      };
    }`;

export const prepareInstructions = ({jobTitle, jobDescription}: { jobTitle: string; jobDescription: string; }) =>
    `Eres un experto en ATS (Applicant Tracking System) y en análisis de currículums.
      Por favor, analiza y califica este currículum y sugiere cómo mejorarlo.
      La puntuación puede ser baja si el currículum es deficiente.
      Sé minucioso y detallado. No tengas miedo de señalar errores o áreas de mejora.
      Si hay mucho que mejorar, no dudes en dar puntuaciones bajas. El objetivo es ayudar al usuario a mejorar su currículum.
      Si está disponible, utiliza la descripción del puesto al que el usuario está postulando para dar una retroalimentación más detallada.
      Si se proporciona, ten en cuenta la descripción del trabajo.
      El título del puesto es: ${jobTitle}
      La descripción del puesto es: ${jobDescription}
      Proporciona la retroalimentación usando el siguiente formato:
      ${AIResponseFormat}
      Devuelve el análisis como un objeto JSON, sin ningún otro texto y sin las comillas invertidas.
      No incluyas ningún otro texto ni comentarios.`;
