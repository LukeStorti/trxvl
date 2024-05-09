import Image from "next/image";

const StayCardIcon = ({ title, icon }: { title: string; icon: string }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-5 h-5 relative">
        <Image src={icon} alt="category image" className="w-5 h-5" width={20} height={20} />
      </div>
      <p className="text-muted-foreground text-xs">{title}</p>
    </div>
  );
};

export default StayCardIcon;
