import fs from 'fs-extra'
import path from "node:path";
import {IRoute} from "@/app/_routing/types";
import { isArray } from 'lodash'

const createStructure = (routes: IRoute[], parentPath: string = '') => {
    for (const route of routes) {
        const childRoutes = route.routes;

        // if route includes child routes it's layout
        const isLayout = isArray(childRoutes)

        const moduleDirPath = path.join(process.cwd(), 'src/app', parentPath, route.path);

        // ensure that dir exists
        fs.ensureDirSync(moduleDirPath);

        const filePath = path.join(process.cwd(), 'src', `${route.component}.tsx`);

        let fileDestPath: string;

        if (isLayout) {
            fileDestPath = path.join(process.cwd(), 'src/app', parentPath, route.path, 'layout.tsx');
        } else {
            fileDestPath = path.join(process.cwd(), 'src/app', parentPath, route.path, 'page.tsx');
        }

        console.log(fileDestPath)

        // copy file
        fs.copyFileSync(filePath, fileDestPath);

        // handle child routes
        if (isLayout) {
            const moduleLocalPath = path.join(parentPath, route.path)
            createStructure(childRoutes, moduleLocalPath)
        }
    }
}

export default createStructure;
