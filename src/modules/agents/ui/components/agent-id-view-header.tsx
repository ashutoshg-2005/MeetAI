import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronsRightIcon, TrashIcon, PencilIcon, MoreVerticalIcon } from "lucide-react";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    } from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

interface Props{
    agentId: string;
    agentName: string;
    onEdit: () => void;
    onRemove: () => void;
}

export const AgentIdHeader = ({
    agentId, 
    agentName, 
    onEdit, 
    onRemove}: Props) => {
    return (
        <div className="flex items-center justify-between">
            <Breadcrumb >
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild className="font-md text-xl">
                            <Link href="/agents">
                                My Agents
                            </Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-foreground text-xl font-medium [$>svg]:size-4" >
                        <ChevronsRightIcon />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild className="font-md text-xl text-foreground">
                            <Link href={`/agents/${agentId}`}>
                                {agentName}
                            </Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>  
            </Breadcrumb>
            <DropdownMenu modal = {false}>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="w-8 h-8">
                        <MoreVerticalIcon className="size-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align = "end">
                    <DropdownMenuItem onClick={onEdit}>
                        <PencilIcon className="size-4 text-black" />
                            Edit Agent
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={onRemove}>
                        <TrashIcon className="size-4 text-red-500" />
                            Delete Agent
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>      
        </div>
    );
};