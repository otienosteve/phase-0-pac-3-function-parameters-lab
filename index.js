const introduction=(arg)=>{
   return `Hi, my name is ${arg}.` 
}
const introductionWithLanguage=(name, language)=>{
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
const introductionWithLanguageOptional=(name, language='JavaScript')=>{
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}