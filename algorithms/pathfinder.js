function getCommands(field, power) {
    let mapSize = Math.sqrt(field.length);
    let map = [];
    let tiles = [];
    let blocked = new Set();
    let y = 0;
    let start = {};
    let target = {};
    let open = new Set(),
        closed =  new Set();

    let addStep = (current, target, steps, facing = 'N', turns, parent = false) => {
        let h = checkDistance(current, target);
        return {
            tile: current,
            h,
            g: steps,
            f: steps + h,
            turns,
            facing,
            parent,
        };
    };

    let checkDistance = ({x: currentX, y: currentY}, {x: targetX, y: targetY}) => {
        let dX = Math.abs(targetX - currentX),
            dY = Math.abs(targetY - currentY);
        return dX - dY;
    };

    let getNextOpen = function () {
            let next = { f: Infinity };
            for (let nextOpen of open.values()) {
                if (nextOpen.f < next.f) {
                    next = nextOpen;
                }
            }
            return next;
        },
        isClosed = (tile) => {
            for (let nextClosed of closed.values()) {
                if ((nextClosed.x === tile.x) && (nextClosed.y === tile.y)){
                    return true;
                }
            }
            return false;
        },
        isOpen = (tile) => {
            for (let nextOpen of open.values()) {
                if ((nextOpen.x === tile.x) && (nextOpen.y === tile.y)){
                    return nextOpen;
                }
            }
            return false;
        },
        isBlocked = (x, y) => {
            if ((x < 0 || y < 0) || (x >= mapSize || y >= mapSize) ){
                return true;
            }
            return blocked.has(map[y][x]);
        },
        getTileAt = (x, y, turns, facing) =>{
            return Object.assign({}, map[y][x], {turns, facing});
        },
        getTurns = (facing, newDirection) => {
            let directions = ['N', 'E', 'S', 'W'],
                t1 = directions.indexOf(facing),
                turns = [...directions.slice(t1), ...directions.slice(0, t1)].indexOf(newDirection);
            return 'r'.repeat(turns);
        },
        getNeighbors = ({x, y, facing}) => {
            let neighbors = [];

            if (!isBlocked(x, y - 1)) neighbors.push(getTileAt(x, y - 1, getTurns(facing, 'N'), 'N'));
            if (!isBlocked(x + 1, y)) neighbors.push(getTileAt(x + 1, y, getTurns(facing, 'E'), 'E'));
            if (!isBlocked(x, y + 1)) neighbors.push(getTileAt(x, y + 1, getTurns(facing, 'S'), 'S'));
            if (!isBlocked(x - 1, y)) neighbors.push(getTileAt(x - 1, y, getTurns(facing, 'W'), 'W'));

            return neighbors;
        },
        buildPath = (tile, path) => {
            if (tile.parent) {
                let turns = tile.turns || '';
                path.push(`${turns}f`);
                return buildPath(tile.parent, path);
            } else {
                return path;
            }
        },
        isTarget = ({x, y}) => {
            return ((target.x === x) && (target.y === y));
        };

    let findPath = () => {
        let current = start,
            stepCost;

        open = new Set();
        open.add(addStep(start, target, 0, 'N'));
        if(checkDistance(start, target) > power) return [];

        while(open.size !== 0) {
            current = getNextOpen();

            if(isTarget(current.tile)) {
                return buildPath(current, []);
            }

            open.delete(current);
            closed.add(current);

            let neighbors = getNeighbors(current.tile);
            for (let i = 0; i < neighbors.length; i++) {
                let currentNeighbor = neighbors[i];
                let nowFacing = currentNeighbor.facing;
                stepCost = current.g + currentNeighbor.turns.length;

                if((isClosed(currentNeighbor) && stepCost >= currentNeighbor.g) || stepCost > power) {
                    continue;
                }
                let turns = currentNeighbor.turns;

                currentNeighbor = isOpen(currentNeighbor);
                if (!currentNeighbor || stepCost < currentNeighbor.g) {
                    if (!currentNeighbor) {
                        open.add(addStep(neighbors[i], target, stepCost, nowFacing, turns, current));
                    } else {
                        currentNeighbor.parent = current;
                        currentNeighbor.g = stepCost;
                        currentNeighbor.f = stepCost + currentNeighbor.h;
                    }
                }
            }
        }
        return false;

    };


    for (let i = 0; i < field.length; i = i + mapSize) {
        map[y] = [];
        field.substr(i, i + mapSize).split('').forEach((tile, x) => {
            let newTile = {x, y};
            switch(tile) {
                case '#':
                    blocked.add(newTile);
                    break;
                case 'S':
                    start = newTile;
                    break;
                case 'T':
                    target = newTile;
                    break;
            }

            map[y][x] = newTile;
            tiles.push(newTile);
        });

        y = y + 1;
    }

    return findPath();
}

console.log(getCommands('T.S.', 10).join(''));
console.log(getCommands('S.......T', 10).join(''));
console.log(getCommands('S.......T', 5).join(''));
