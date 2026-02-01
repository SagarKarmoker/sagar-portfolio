import { 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
  Shield, 
  Linkedin, 
  GraduationCap, 
  Github, 
  Mail,
  Server,
  Settings,
  BookOpen,
  IdCard,
  Users,
  Calendar,
  MapPin,
  Clock,
  ArrowRight
} from 'lucide-react';

export const iconMap = {
  Code,
  Database,
  Smartphone,
  Globe,
  Shield,
  Linkedin,
  GraduationCap,
  Github,
  Mail,
  Server,
  Settings,
  BookOpen,
  IdCard,
  Users,
  Calendar,
  MapPin,
  Clock,
  ArrowRight
};

export const getIcon = (iconName) => {
  return iconMap[iconName] || Code; // Default to Code icon if not found
}; 