export interface Skill {
  icon?: string
  emoji?: string
  label: string
  type?: 'dev'
}

export const SKILLS: Skill[] = [
  { icon: 'devicon-python-plain', label: 'Python', type: 'dev' },
  { icon: 'devicon-flask-original', label: 'Flask', type: 'dev' },
  { emoji: '📦', label: 'Joblib' },
  { icon: 'devicon-sqlite-plain', label: 'SQLite', type: 'dev' },
  { emoji: '🤖', label: 'Machine Learning' },
  { emoji: '📈', label: 'SVM Model' },
  { icon: 'devicon-html5-plain', label: 'HTML/CSS', type: 'dev' },
  { icon: 'devicon-react-original', label: 'React JS', type: 'dev' },
  { icon: 'devicon-javascript-plain', label: 'JavaScript', type: 'dev' },
  { icon: 'devicon-numpy-plain', label: 'NumPy', type: 'dev' },
  { icon: 'devicon-pandas-plain', label: 'Pandas', type: 'dev' },
  { emoji: '🔬', label: 'Scikit-learn' },
  { emoji: '🧬', label: 'Data Science' },
  { emoji: '📊', label: 'Data Analysis' },
  { emoji: '⚙️', label: 'Algorithm Design' },
  { emoji: '📉', label: 'Power BI' },
  { emoji: '📋', label: 'Tableau' },
]
