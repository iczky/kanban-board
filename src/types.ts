// export interface Contributor {
//   avatar: string;
//   name: string;
// }

// export interface Task {
//   name: string;
//   isDone: boolean;
// }

// // interface Tag
// export interface Tag {
//   information: string;
//   priority: string;
// }

// export interface LabelProps {
//   type: Labeltype;
//   text: string;
// }

// export type Card = {
//   title: string;
//   desc: string;
//   contributor?: Contributor[];
//   tasks?: Task[];
//   tag?: Tag[];
// };

export interface KanbanBoard {
  lanes: Lane[];
}

export interface Lane {
  title: string;
  cards: Card[];
}

export interface Card {
  title: string;
  desc: string;
  contributors?: string[];
  taskList?: TaskList[];
  tags?: string[];
}

export interface TaskList {
  isDone: boolean;
  desc: string;
}

export type Labeltype = "Not Started" | "In Progress" | "Blocked" | "Done";
