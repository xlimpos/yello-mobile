import { observable,decorate, action, computed,toJS } from "mobx";

class PatientVaccStore {
    patientVaccinationDataSource = [
        {
            id:1,
            name:"Diphtheria Tetanus Pertussis Poliomyelitis Hib",
            boostes:[
                {
                    id:1,
                    date: 'Sep 2, 2019 4:30 AM',
                    isverified:false
                },

                {
                    id:2,
                    date: 'Sep 12, 2019 4:30 AM',
                    isverified:false
                },

                {
                    id:3,
                    date: 'Sep 12, 2019 4:30 AM',
                    isverified:false
                },

                {
                    id:4,
                    date: 'Sep 22, 2019 4:30 AM',
                    isverified:false
                }
            ]
        },
        
        {
            id:2,
            name:"Diphtheria Tetanus Pertussis Poliomyelitis",
            boostes:[
                {
                    id:1,
                    date: 'Oct 10, 2019 1:00 PM',
                    isverified:false
                },

                {
                    id:2,
                    date: 'Oct 20, 2019 1:00 PM',
                    isverified:false
                },

                {
                    id:3,
                    date: 'Oct 30, 2019 1:00 PM',
                    isverified:false
                },

                {
                    id:4,
                    date: 'Nov 01, 2019 1:00 PM',
                    isverified:false
                }
            ]
        },

        {
            id:3,
            name:"Rotavirus",
            boostes:[
                {
                    id:1,
                    date: 'Dec 20, 2019 8:15 PM',
                    isverified:false
                },

                {
                    id:2,
                    date: 'Jan 20, 2020 8:15 PM',
                    isverified:false
                },

                {
                    id:3,
                    date: 'Feb 20, 2020 8:15 PM',
                    isverified:false
                }
            ]
        },


        {
            id:4,
            name:"Chickenpox",
            boostes:[
                {
                    id:1,
                    date: 'Sep 2, 2019 7:30 AM',
                    isverified:false
                },
                {
                    id:2,
                    date: 'Oct 2, 2019 7:30 AM',
                    isverified:false
                },
                {
                    id:3,
                    date: 'Nov 2, 2019 7:30 AM',
                    isverified:false
                },
                {
                    id:4,
                    date: 'Dec 2, 2019 7:30 AM',
                    isverified:false
                }

            ]
        },
        
        {
            id:5,
            name:"Hepatitis B",
            boostes:[
                {
                    id:1,
                    date: 'Oct 11, 2019 11:00 AM',
                    isverified:false
                },

                {
                    id:2,
                    date: 'Nov 15, 2019 11:00 AM',
                    isverified:false
                },
            ]
        },

        {
            id:5,
            name:"Flu",
            boostes:[
                {
                    id:1,
                    date: 'Oct 10, 2019 1:00 PM',
                    isverified:false
                },

                {
                    id:2,
                    date: 'Nov 12, 2019 1:00 PM',
                    isverified:false
                },
            ]
        },

        {
            id:6,
            name:"HVP",
            boostes:[
                {
                    id:1,
                    date: 'Dec 20, 2019 8:15 PM',
                    isverified:false
                }
            ]
        },

        {
            id:7,
            name:"Tetanus Diphtheria Pertussis",
            boostes:[
                {
                    id:1,
                    date: 'Dec 20, 2019 8:15 PM',
                    isverified:false
                }
            ]
        },

        {
            id:8,
            name:"Tetanus Diphtheria Pertussis",
            boostes:[
                {
                    id:1,
                    date: 'Dec 20, 2019 8:15 PM',
                    isverified:false
                }
            ]
        },

        {
            id:9,
            name:"Tetanus Diphtheria Pertussis",
            boostes:[
                {
                    id:1,
                    date: 'Dec 20, 2019 8:15 PM',
                    isverified:false
                }
            ]
        },
    
    ];

    }
    decorate(PatientVaccStore,{
        patientVaccinationDataSource: observable

    });

export default new PatientVaccStore()
