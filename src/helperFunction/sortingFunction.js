export function sortTicketsByPriorityDescending(tickets) {
  return [...tickets].sort((a, b) => b.priority - a.priority);
}

export function sortTicketsByTitleAscending(tickets) {
  return [...tickets].sort((a, b) => a.title.localeCompare(b.title));
}
