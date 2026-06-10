import { Icons } from '@/components/icons';
import { Experience, Link, Project, Skill } from './types';


export const links: Link[] = [
    {
        name: 'Home',
        hash: '#home'

    },

    {
        name: 'About',
        hash: '#about',
    },
    {
        name: 'Experience',
        hash: '#experience',
    },
    {
        name: 'Projects',
        hash: '#projects',
    },
    {
        name: 'Contact',
        hash: '#contact',
    },

]

export const projectsData: Project[] = [
    {
        video: '',
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        technologies: ['React', 'Node.js', 'MongoDB'],
        links: {
            preview: '#',
            github: '#',
            githubApi: '#',
        }
    },
    {
    video: '',
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        technologies: ['React', 'Node.js', 'MongoDB'],
        links: {
            preview: '#',
            github: '#',
            githubApi: '#',
        },
    }
]