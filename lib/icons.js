import { 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
  Shield, 
  Linkedin, 
  Twitter, 
  Github, 
  Mail,
  GraduationCap 
} from 'lucide-react';

export const iconMap = {
  Code,
  Database,
  Smartphone,
  Globe,
  Shield,
  Linkedin,
  Twitter,
  Github,
  Mail,
  GraduationCap
};

export const getIcon = (iconName) => {
  return iconMap[iconName] || Code; // Default to Code icon if not found
}; 