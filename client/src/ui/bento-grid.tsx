import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  itemNumber,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  itemNumber: number;
  link: string;
}) => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ y: 500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: itemNumber * 0.3 }}
      className={cn(
        "row-span-1 rounded-xl cursor-pointer group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black/30 dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      onClick={() => navigate(link)}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-dakrerText-600 dark:text-darkerText-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-darkerText-600 text-xs dark:text-darkerText-300">
          {description}
        </div>
      </div>
    </motion.div>
  );
};
