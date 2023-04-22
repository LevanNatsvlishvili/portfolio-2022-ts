/* eslint-disable @next/next/no-img-element */

interface Skill {
  skill: string;
  level: string;
  time?: string;
  logo?: string;
}

const Skill = (props: Skill) => {
  const { skill, level, time, logo } = props;
  return (
    <div className="flex">
      {logo && <img src={logo} alt="skill" />}
      <div className="ml-4">
        <h3 className="text-sm text-grey-text">{skill}</h3>
        <h6 className="text-xs text-grey-text opacity-60">{level}</h6>
      </div>
      <p className="text-sm ml-auto self-center text-grey-text">{time}</p>
    </div>
  );
};

export default Skill;
