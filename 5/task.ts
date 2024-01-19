class User {
  skills: string[];

  addSkill(skill: string): void;
  addSkill(skill: string[]): void;
  addSkill(skillOrSkills: string | string[]) {
    if (typeof skillOrSkills === 'string') {
      this.skills.push(skillOrSkills);
    } else {
      skillOrSkills.forEach((item) => {
        this.skills.push(item);
      });
    }
  }
}
