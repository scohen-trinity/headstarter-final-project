const lifestyles = { 
    HOMEBODY: 'Homebody',
    PARTY: 'Party',
    SOMETIMES_PARTY: 'Sometimes Party',
}

const users = [
    {
      id: 1,
      name: 'Sam',
      username: 'sam123',
      password: 'sam_pass',
      budget: 800,
      school: 'Trinity University',
      lifestyle: lifestyles.HOMEBODY,
      residencyType: 'Apartment',
    },
    {
      id: 2,
      name: 'Praneet',
      username: 'praneet123',
      password: 'praneet_pass',
      budget: 1000,
      school: 'UT Dallas',
      lifestyle: lifestyles.HOMEBODY,
      residencyType: 'Dorm',
    },
    {
      id: 3,
      name: 'Bob',
      username: 'bob123',
      password: 'bob_pass',
      budget: 950,
      school: 'UT Dallas',
      lifestyle: lifestyles.PARTY,
      residencyType: 'Dorm',
    },
    {
      id: 4,
      name: 'Joe',
      username: 'joe123',
      password: 'joe_pass',
      budget: 1200,
      school: 'Trinity University',
      lifestyle: lifestyles.SOMETIMES_PARTY,
      residencyType: 'Apartment',
    },
  ];
  
  export default users;