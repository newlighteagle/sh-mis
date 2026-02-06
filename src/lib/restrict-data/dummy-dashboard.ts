
export const dashboardThemes = {
  'training': {
    scorecards: [
      { label: 'Total Trainings', value: '24', change: '+2', trend: 'up' },
      { label: 'Total Participants', value: '850', change: '+12%', trend: 'up' },
      { label: 'Certified Farmers', value: '120', change: '+5%', trend: 'up' },
    ],
    chart: {
      title: 'Training Participation Trend',
      data: [
        { name: 'Q1', value: 120 },
        { name: 'Q2', value: 200 },
        { name: 'Q3', value: 150 },
        { name: 'Q4', value: 380 },
      ]
    }
  },
  'bmp': {
    scorecards: [
      { label: 'BMP Adoption Rate', value: '75%', change: '+5%', trend: 'up' },
      { label: 'Fertilizer Usage', value: '-10%', change: '-10%', trend: 'down' }, // Good trend
      { label: 'Yield Improvement', value: '+15%', change: '+15%', trend: 'up' },
    ],
    chart: {
      title: 'Yield vs BMP Adoption',
      data: [
        { name: 'Jan', value: 40 },
        { name: 'Feb', value: 45 },
        { name: 'Mar', value: 55 },
        { name: 'Apr', value: 60 },
        { name: 'May', value: 75 },
      ]
    }
  },
  // Default fallback
  'generic': {
    scorecards: [
      { label: 'Active Projects', value: '12', change: '+1', trend: 'up' },
      { label: 'Total Budget', value: '$1.2M', change: '0%', trend: 'neutral' },
      { label: 'Team Members', value: '45', change: '+3', trend: 'up' },
    ],
    chart: {
      title: 'Project Progress',
      data: [
        { name: 'Week 1', value: 20 },
        { name: 'Week 2', value: 40 },
        { name: 'Week 3', value: 60 },
        { name: 'Week 4', value: 80 },
      ]
    }
  }
};
